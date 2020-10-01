import React from 'react';
import styled from '@emotion/styled';
import ChapterWrapper from '../../layouts/ChapterWrapper';
import ChapterParagraph from '../../UI/ChapterParagraph';
import ChapterH2 from '../../UI/ChapterH2';
import ChapterLink from '../../UI/ChapterLink';

const AboutDocs = () => {
  return (
    <ChapterWrapper
      updatedBy='Dan Abramov'
      updatedDate='10/20/2018'
      chapterName='О документации'
      href='https://github.com/facebook/create-react-app/edit/master/docusaurus/docs/documentation-intro.md'
      nextTitle='С чего начать?'
      nextHref='getting-started'
    >
      <AboutDocsStyled>
        <ChapterParagraph>
          Добро пожаловать в Create React App документацию
        </ChapterParagraph>
        <ChapterH2 anchorId='navigation'>Навигация</ChapterH2>
        <ChapterParagraph>
          Вы можете найти разные темы в содержании. На desktop устройствах вы
          должны увидеть это на левой боковой панели. На мобильном устройстве вы
          должны увидеть это после нажатия значка со стрелками в верхнем левом
          углу.
        </ChapterParagraph>
        <ChapterH2 anchorId='looking-for-react-docs'>
          Ищете документацию для React?
        </ChapterH2>
        <ChapterParagraph>
          Документация для React находится на отдельном сайте:{' '}
          <ChapterLink href='https://reactjs.org/'>reactjs.org</ChapterLink>.
        </ChapterParagraph>
        <ChapterParagraph>
          Этот сайт только об Create React App.
        </ChapterParagraph>
        <ChapterH2 anchorId='something-missing'>Чего то не хватает?</ChapterH2>
        <ChapterParagraph>
          Если у вас есть идеи для других инструкций «Как сделать», которые
          должны быть на этой странице,{' '}
          <ChapterLink href='https://github.com/facebook/create-react-app/issues'>
            дайте нам знать
          </ChapterLink>{' '}
          или{' '}
          <ChapterLink href='https://github.com/facebook/create-react-app/tree/master/docusaurus/docs'>
            поделитесь ими!
          </ChapterLink>
        </ChapterParagraph>

        <ChapterH2 anchorId='feedback'>Обратная связь</ChapterH2>
        <ChapterParagraph>
          Мы всегда открыты для{' '}
          <ChapterLink href='https://github.com/facebook/create-react-app/issues'>
            ваших пожеланий
          </ChapterLink>
          .
        </ChapterParagraph>
      </AboutDocsStyled>
    </ChapterWrapper>
  );
};

const AboutDocsStyled = styled.section``;

export default AboutDocs;
