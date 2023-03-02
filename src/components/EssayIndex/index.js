import { Card } from './Card';

export const EssayIndex = ({ essays }) => {
  const cards = essays.map((essay) => (
    <Card
      key={essay.href}
      tags={essay.tags}
      href={essay.href}
      title={essay.title}
      date={essay.formated_date}
      summary={essay.summary}
    />
  ));

  return cards;
};
