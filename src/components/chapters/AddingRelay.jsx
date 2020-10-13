import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import CodeBlock from '../../UI/CodeBlock';

const AddingRelay = () => {
  return (
    <PageContent>
      <p>
        Relay это framework для создания приложений React, управляемых данными, на базе GraphQL. Текущая версия Relay
        работает с проектами Create React App прямо из коробки, используя макросы Babel. Настройте свой проект, как
        показано в <ChapterLink href='https://relay.dev/'>Relay документацию</ChapterLink>, затем убедитесь, что у вас
        есть версия плагина babel, предоставляющая макрос.
      </p>

      <p>Чтобы добавить его, запустите:</p>

      <CodeBlock>
        <span>npm install --save babel-plugin-relay</span>
      </CodeBlock>

      <p>
        В качестве альтернативы вы можете использовать <code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add babel-plugin-relay</span>
      </CodeBlock>

      <p>
        Затем, где бы вы ни использовали тег шаблона <code>graphql</code>, импортируйте макрос:
      </p>

      <CodeBlock>
        <span>import graphql from 'babel-plugin-relay/macro';</span>
        <span>{`// instead of:`}</span>
        <span>{`//   import { graphql } from "babel-plugin-relay"`}</span>
        <span>
          <br />
        </span>
        <span>graphql`</span>
        <span>&nbsp;&nbsp;&nbsp;{`query UserQuery {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`viewer {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>`;</span>
      </CodeBlock>

      <p>
        Чтобы узнать больше о Relay, посетите <ChapterLink href='https://relay.dev/'>его документацию</ChapterLink>.
      </p>
    </PageContent>
  );
};

export default AddingRelay;
