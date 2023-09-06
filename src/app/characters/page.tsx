import fs from 'fs';
import Image from 'next/image';
import { GROUPS } from '../../data/characters';

export default function Home() {
  if (!process.env.SAVEDATA) {
    console.error('セーブデータの読み込みに失敗しました');
    return <div>セーブデータの読み込みに失敗しました</div>;
  }

  const savedata = JSON.parse(Buffer.from(fs.readFileSync(process.env.SAVEDATA, 'utf8'), 'base64').toString('utf8'));
  console.log(savedata.achievements.ameClear);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul role="list" className="w-full max-w-screen-sm p-8 bg-white rounded-xl shadow-md divide-y divide-gray-200">
        {GROUPS.map((group) =>
          group.characters.map((character) => (
            <li key={character.name} className="flex justify-between gap-x-6 py-2">
              <div className="flex min-w-0 gap-x-4 justify-center items-center">
                <Image width={43} height={38} src={`/portraits/${character.name}.png`} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{character.displayName}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {group.area} / {group.displayName}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Lv. {[savedata.characters.find((c: string[]) => c[0] === character.name)[1]]}</p>
                <p className={savedata.achievements[`${character.name}Clear`].unlocked ? 'text-primary' : 'text-gray-400'}>
                  {savedata.achievements[`${character.name}Clear`].unlocked ? 'CLEARED!!' : 'NOT CLREAR..'}
                </p>
              </div>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
