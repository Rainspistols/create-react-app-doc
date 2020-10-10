import React from 'react';
import ChapterTitle from '../../UI/ChapterTitle';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';

const AboutDocs = () => {
  return (
    <PageContent>
      <p>Добро пожаловать в Create React App документацию</p>
      <ChapterTitle anchorId='navigation'>Навигация</ChapterTitle>
      <p>
        Вы можете найти разные темы в содержании. На desktop устройствах вы
        должны увидеть это на левой боковой панели. На мобильном устройстве вы
        должны увидеть это после нажатия значка со стрелками в верхнем левом
        углу.
      </p>
      <ChapterTitle anchorId='looking-for-react-docs'>
        Ищете документацию для React?
      </ChapterTitle>
      <p>
        Документация для React находится на отдельном сайте:{' '}
        <ChapterLink href='https://reactjs.org/'>reactjs.org</ChapterLink>.
      </p>
      <p>Этот сайт только об Create React App.</p>
      <ChapterTitle anchorId='something-missing'>
        Чего то не хватает?
      </ChapterTitle>
      <p>
        Если у вас есть идеи для других инструкций «Как сделать», которые должны
        быть на этой странице,{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/issues'>
          дайте нам знать
        </ChapterLink>{' '}
        или{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/tree/master/docusaurus/docs'>
          поделитесь ими!
        </ChapterLink>
      </p>

      <ChapterTitle anchorId='feedback'>Обратная связь</ChapterTitle>
      <p>
        Мы всегда открыты для{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/issues'>
          ваших пожеланий
        </ChapterLink>
        .
      </p>
    </PageContent>
  );
};

export default AboutDocs;
