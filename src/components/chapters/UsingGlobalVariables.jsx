import React from 'react'
import PageContent from '../../layouts/PageContent';
import CodeBlock from '../../UI/CodeBlock';

const UsingGlobalVariables = () => {
  return (
    <PageContent>
      <p>Когда вы включаете скрипт в HTML-файл, который определяет глобальные переменные, и пытаетесь использовать одну из этих переменных в коде, линтер будет жаловаться, потому что он не может увидеть определение переменной.</p>

      <p>Вы можете избежать этого, явно прочитав глобальную переменную из <code>window</code>, например:</p>

      <CodeBlock>
        <span>const $ = window.$;</span>
      </CodeBlock>

      <p>Это дает понять, что вы используете глобальную переменную намеренно, а не из-за опечатки.</p>

      <p>В качестве альтернативы вы можете заставить линтер игнорировать любую строку, добавив <code>{`// eslint-disable-line`}</code> после неё.</p>
    </PageContent>
  );
}

export default UsingGlobalVariables;