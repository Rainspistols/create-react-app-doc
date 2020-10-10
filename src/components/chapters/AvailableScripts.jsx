import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterTitle from '../../UI/ChapterTitle';
import ChapterLink from '../../UI/ChapterLink';

const AvailableScripts = () => {
  return (
    <PageContent>
      <p>В каталоге проекта вы можете запустить:</p>

      <ChapterTitle anchorId='npm-test'>
        <code>npm start</code>
      </ChapterTitle>

      <p>
        Запускает приложение в режиме разработки. Откройте{' '}
        <ChapterLink href='http://localhost:3000'>
          http://localhost:3000
        </ChapterLink>{' '}
        для просмотра в браузере.
      </p>

      <p>
        Если вы внесете правки, страница перезагрузится. Вы также увидите любые
        ошибки или предупреждения в консоли.
      </p>

      <ChapterTitle anchorId='npm-test'>
        <code>npm test</code>
      </ChapterTitle>

      <p>
        Запускает тестовый раннер в интерактивном режиме наблюдения. См. раздел{' '}
        <ChapterLink isLink href='/running-tests'>
          запуск тестов
        </ChapterLink>{' '}
        чтобы получить больше информации.
      </p>

      <ChapterTitle anchorId='npm-run-build'>
        <code>npm run build</code>
      </ChapterTitle>

      <p>
        Собирает production версию приложения в папку <code>build</code>. Это
        правильно соединяет React в production режиме и оптимизирует сборку для
        лучшей производительности.
      </p>

      <p>
        Сборка минифицирована, а имена файлов включают хеши. Если необходимо,
        имена классов и имена функций могут быть включены для профилирования
        целей. См.{' '}
        <ChapterLink href='/production-build'>production сборка</ChapterLink>{' '}
        раздел для получения дополнительной информации.
      </p>

      <p>
        Ваше приложение готово к развертыванию! См. раздел о {''}
        <ChapterLink href='/deployment' isLink>
          развертывание(deploy)
        </ChapterLink>{' '}
        для получения дополнительной информации о deploy вашего приложения на
        популярных хостингах.
      </p>

      <ChapterTitle anchorId='npm-run-eject'>
        <code>npm run eject</code>
      </ChapterTitle>

      <p>
        Примечание: это односторонняя операция. После использования
        <code>eject</code> вы не сможете вернуться!
      </p>

      <p>
        Если вас не устраивает инструмент сборки и выбор конфигурации, вы можете
        в любой момент использовать<code>eject</code>. Эта команда удалит из
        вашего проекта зависимость отдельной сборки.
      </p>

      <p>
        Instead, it will copy all the configuration files and the transitive
        dependencies (webpack, Babel, ESLint, etc.) into your project as
        dependencies in package.json. Technically, the distinction between
        dependencies and development dependencies is pretty arbitrary for
        front-end apps that produce static bundles. Вместо этого он скопирует
        все файлы конфигурации и транзитивные зависимости (webpack, Babel,
        ESLint и т. Д.) В ваш проект как зависимости в <code>package.json</code>
        . Технически различие между зависимостями(dependencies) и зависимостями
        разработки(dev dependencies) довольно формально для интерфейсных
        приложений, которые создают статические пакеты.
      </p>

      <p>
        Кроме того, раньше это вызывало проблемы с некоторыми хостинговыми
        платформами, которые не устанавливали зависимости для разработки (и,
        следовательно, не могли собрать проект на сервере или протестировать его
        прямо перед развертыванием). Вы можете изменить порядок своих
        зависимостей в <code>package.json</code> по своему усмотрению.
      </p>

      <p>
        Все команды, кроме <code>eject</code>, по-прежнему будут работать, но
        они будут указывать на скопированные скрипты, чтобы вы могли их
        настраивать. На этом этапе вы сами по себе.
      </p>

      <p>
        Вам не нужно использовать <code>eject</code>. Стандартный(кураторский)
        набор функций подходит для малых и средних компаний, и вы не должны
        чувствовать себя обязанными использовать эту функцию. Однако мы
        понимаем, что этот инструмент бесполезен, если вы не можете настроить
        его, когда будете к нему готовы.
      </p>
    </PageContent>
  );
};

export default AvailableScripts;
