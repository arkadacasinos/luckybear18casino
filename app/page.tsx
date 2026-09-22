const phrases = [
  'lucky bear casino',
  'luckybear casino',
  'lucky bear казино',
  'lucky bear casino зеркало',
  'lucky bear casino официальный',
  'lucky bear casino официальный сайт',
  'лаки бир казино',
  'лакибир казино',
  'лаки бир казино зеркало',
  'лаки бир казино онлайн',
  'лаки бир казино официальный',
  'лаки бир казино официальный сайт',
  'лакибир казино официальный сайт',
  'лаки бир казино сайт',
]

export default function Page() {
  return (
    <main className="cbp_site-shell">
      <header className="cbp_topbar">
        <a className="cbp_brand" href="#top" aria-label="Lucky Bear Casino — на главную">
          <span className="cbp_brand-mark" aria-hidden="true">LB</span>
          <span>Lucky Bear <em>Casino</em></span>
        </a>
        <nav className="cbp_nav" aria-label="Основная навигация">
          <a href="#games">Игры</a>
          <a href="#guide">Как начать</a>
          <a className="cbp_nav-cta" href="#access">Открыть казино</a>
        </nav>
      </header>

      <section id="top" className="cbp_hero" aria-labelledby="hero-title">
        <div className="cbp_hero-copy">
          <p className="cbp_kicker"><span className="cbp_dot" /> Онлайн-казино для спокойной игры</p>
          <h1 id="hero-title">Ваш счастливый вечер начинается в <span>Lucky Bear Casino</span></h1>
          <p className="cbp_intro">Lucky Bear Casino — понятная площадка для игроков, которые ценят честные правила, быстрый старт и хороший выбор развлечений. Заходите с телефона, выбирайте игру по настроению и играйте ответственно.</p>
          <div className="cbp_actions" id="access">
            <a className="cbp_primary-action" href="#games">Смотреть игры <span aria-hidden="true">→</span></a>
            <a className="cbp_text-action" href="#guide">Узнать больше</a>
          </div>
          <ul className="cbp_trust-row" aria-label="Преимущества площадки">
            <li><span>01</span> Мобильный доступ</li>
            <li><span>02</span> Понятная навигация</li>
            <li><span>03</span> Игра 18+</li>
          </ul>
        </div>
        <div className="cbp_hero-art">
          <div className="cbp_art-label">THE HAPPY<br />HOUR</div>
          <img src="/luckybear-casino-art.png" alt="Медведь Lucky Bear в уютном казино" width="1200" height="800" />
          <p className="cbp_art-caption">Удача любит тех, кто играет с умом</p>
        </div>
      </section>

      <section className="cbp_signal-strip" aria-label="Коротко о Lucky Bear Casino">
        <span>FAIR PLAY</span><span>SAFE ACCESS</span><span>REAL EMOTIONS</span><span>LUCKY BEAR CLUB</span>
      </section>

      <section id="games" className="cbp_content-section" aria-labelledby="games-title">
        <div className="cbp_section-heading">
          <p className="cbp_kicker">01 / Игровое меню</p>
          <h2 id="games-title">Lucky Bear Casino: игра без лишнего шума</h2>
        </div>
        <div className="cbp_split-copy">
          <p>Когда игрок ищет <strong>lucky bear casino</strong>, ему нужен не случайный набор обещаний, а место, где легко разобраться. В <strong>Luckybear Casino</strong> всё построено вокруг удобства: категории заметны, правила доступны до старта, а любимую игру можно открыть с экрана смартфона.</p>
          <p>В каталоге есть классические слоты с разными темпами, карточные столы для любителей тактики и live-формат с атмосферой настоящего зала. <strong>Lucky Bear Казино</strong> подойдёт и тем, кто заходит на короткую сессию, и тем, кто предпочитает изучить механику и бонусные функции заранее.</p>
        </div>
        <div className="cbp_game-grid">
          <article className="cbp_game-tile cbp_game-tile-wide"><span className="cbp_tile-number">A</span><h3>Слоты и джекпоты</h3><p>Динамичные раунды, знакомые символы и понятная таблица выплат.</p></article>
          <article className="cbp_game-tile"><span className="cbp_tile-number">B</span><h3>Карточные игры</h3><p>Классика для внимательных и тех, кто любит принимать решения.</p></article>
          <article className="cbp_game-tile cbp_game-tile-dark"><span className="cbp_tile-number">C</span><h3>Live-столы</h3><p>Больше атмосферы, общения и ощущения реального казино.</p></article>
        </div>
      </section>

      <section id="guide" className="cbp_guide-section" aria-labelledby="guide-title">
        <div className="cbp_guide-art"><img src="/luckybear-casino-art.png" alt="Деталь иллюстрации Lucky Bear Casino" loading="lazy" width="1200" height="800" /></div>
        <div className="cbp_guide-copy">
          <p className="cbp_kicker">02 / Быстрый старт</p>
          <h2 id="guide-title">Лаки Бир Казино онлайн — всё понятно с первого шага</h2>
          <p>Для входа на <strong>лаки бир казино онлайн</strong> достаточно открыть официальный адрес, создать профиль и выбрать подходящий способ пополнения. Интерфейс адаптирован под мобильный экран: кнопки не прячутся, баланс виден сразу, а переход между играми не требует долгих загрузок.</p>
          <ol className="cbp_steps">
            <li><span>1</span><div><strong>Откройте сайт</strong><p>Используйте официальный доступ Lucky Bear Casino и проверьте адрес в строке браузера.</p></div></li>
            <li><span>2</span><div><strong>Создайте аккаунт</strong><p>Укажите актуальные данные и ознакомьтесь с правилами до внесения средств.</p></div></li>
            <li><span>3</span><div><strong>Выберите игру</strong><p>Начните с демо-режима или минимальной ставки, чтобы освоиться без спешки.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="cbp_mirror-section" aria-labelledby="mirror-title">
        <div>
          <p className="cbp_kicker">03 / Доступность</p>
          <h2 id="mirror-title">Lucky Bear Casino зеркало, если основной адрес недоступен</h2>
        </div>
        <div className="cbp_mirror-copy">
          <p>Иногда провайдер или сеть временно ограничивает привычный домен. В таком случае <strong>lucky bear casino зеркало</strong> помогает попасть в тот же аккаунт и продолжить игру без потери настроек. Пользуйтесь только ссылками из проверенных источников и не передавайте пароль посторонним.</p>
          <p>Официальный сайт <strong>лаки бир казино</strong> и рабочее зеркало должны выглядеть одинаково: тот же логотип, тот же порядок разделов, те же правила. Если страница просит необычные данные или обещает невозможные выигрыши, закройте её и перепроверьте адрес.</p>
        </div>
      </section>

      <section className="cbp_faq-section" aria-labelledby="faq-title">
        <p className="cbp_kicker">04 / Частые вопросы</p>
        <h2 id="faq-title">Что важно знать перед игрой</h2>
        <div className="cbp_faq-list">
          <details open><summary>Где найти лаки бир казино официальный сайт?</summary><p>Переходите по адресу, который указан в официальных каналах Lucky Bear Casino. Проверяйте защищённое соединение и название домена перед входом.</p></details>
          <details><summary>Чем отличается lucky bear casino официальный доступ?</summary><p>Официальный доступ ведёт на актуальную версию площадки с действующими правилами, поддержкой и корректной работой личного кабинета.</p></details>
          <details><summary>Можно ли играть с телефона?</summary><p>Да. Лаки бир казино сайт адаптирован под iPhone и Android: интерфейс сохраняет читаемость, а основные разделы находятся в нескольких касаниях.</p></details>
          <details><summary>Как играть ответственно?</summary><p>Заранее определите бюджет и время сессии, не пытайтесь отыгрываться и делайте паузы. Казино предназначено только для совершеннолетних.</p></details>
        </div>
      </section>

      <footer className="cbp_footer">
        <div className="cbp_footer-top"><a className="cbp_brand" href="#top"><span className="cbp_brand-mark">LB</span><span>Lucky Bear <em>Casino</em></span></a><p>Играйте осознанно. Только 18+.</p></div>
        <div className="cbp_hashtags" aria-label="Ключевые фразы сайта">{phrases.map((phrase) => <a key={phrase} href={`#${phrase.replaceAll(' ', '-')}`}>#{phrase.replaceAll(' ', '')}</a>)}</div>
        <div className="cbp_footer-bottom"><span>© 2026 Lucky Bear Casino</span><span>Ответственная игра · Конфиденциальность · Правила</span></div>
      </footer>
    </main>
  )
}
