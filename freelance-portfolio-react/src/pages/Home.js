import Header from "./../components/header/Header";

const Home = () => {
    return (
        <>
        <Header/>
        <main className="section">
            <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                    <h2 className="title-2">Где мы находимся</h2>
                    
                    <a href="https://yandex.ru/profile/124977230720?no-distribution=1&source=wizbiz_new_map_single">
                        <img src="/map.jpg" alt="map-park" />
                    </a>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Подробная информация</h2>
                        <p>Мы занимаемся повышением квалификации детей в области IT-индустрии. Наша основная площадка находится в лагере "Прометей", через который свой путь в IT может найти каждый.
                            Мы занимаемся повышением квалификации детей в области IT-индустрии. Наша основная площадка находится в лагере "Прометей", через который свой путь в IT может найти каждый.
                            Мы занимаемся повышением квалификации детей в области IT-индустрии. Наша основная площадка находится в лагере "Прометей", через который свой путь в IT может найти каждый.
                            </p>
                    </li>
                </ul>

            </div>
        </main>
        </>
    );

}

export default Home;