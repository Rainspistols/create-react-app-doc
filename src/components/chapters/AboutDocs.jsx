import React from 'react';
import ChapterH2 from '../../UI/ChapterH2';
import PageContent from '../../layouts/PageContent';

const AboutDocs = () => {
  return (
    <PageContent>
      <p>Добро пожаловать в Create React App документацию</p>
      <ChapterH2 anchorId='navigation'>Навигация</ChapterH2>
      <p>
        Вы можете найти разные темы в содержании. На desktop устройствах вы
        должны увидеть это на левой боковой панели. На мобильном устройстве вы
        должны увидеть это после нажатия значка со стрелками в верхнем левом
        углу.
      </p>
      <ChapterH2 anchorId='looking-for-react-docs'>
        Ищете документацию для React?
      </ChapterH2>
      <p>
        Документация для React находится на отдельном сайте:{' '}
        <a href='https://reactjs.org/'>reactjs.org</a>.
      </p>
      <p>Этот сайт только об Create React App.</p>
      <ChapterH2 anchorId='something-missing'>Чего то не хватает?</ChapterH2>
      <p>
        Если у вас есть идеи для других инструкций «Как сделать», которые должны
        быть на этой странице,{' '}
        <a href='https://github.com/facebook/create-react-app/issues'>
          дайте нам знать
        </a>{' '}
        или{' '}
        <a href='https://github.com/facebook/create-react-app/tree/master/docusaurus/docs'>
          поделитесь ими!
        </a>
      </p>

      <ChapterH2 anchorId='feedback'>Обратная связь</ChapterH2>
      <p>
        Мы всегда открыты для{' '}
        <a href='https://github.com/facebook/create-react-app/issues'>
          ваших пожеланий
        </a>
        .
      </p>
    </PageContent>
  );
};

export default AboutDocs;
