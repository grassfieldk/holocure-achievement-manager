import fs from 'fs';
import { ACHIEVEMENTS } from '../../data/achievements';

export default function Achievements({ params, searchParams }) {
  if (!process.env.SAVEDATA) {
    console.error('セーブデータの読み込みに失敗しました');
    return <div>セーブデータの読み込みに失敗しました</div>;
  }

  const savedata = JSON.parse(Buffer.from(fs.readFileSync(process.env.SAVEDATA, 'utf8'), 'base64').toString('utf8'));
  const filtered: boolean = searchParams.filtered;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        <a href="/achievements">すべて表示</a>
      </p>
      <p className="mb-4">
        <a href="/achievements?filtered=true">未クリアのみ表示</a>
      </p>
      <ul role="list" className="w-full max-w-screen-sm p-8 bg-white rounded-xl shadow-md divide-y divide-gray-200">
        {ACHIEVEMENTS.map((achievement) => {
          let unlocked = savedata.achievements[`${achievement.name}`].unlocked;
          if (filtered && unlocked) return;
          return (
            <li key={achievement.name} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{achievement.displayName}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{achievement.requirement}</p>
                </div>
              </div>
              <p className={unlocked ? 'text-primary' : 'text-gray-400'}>{unlocked ? 'CLEARED!!' : 'NOT CLEAR..'}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
