import React from 'react';

class Table extends React.Component {
    render() {
        return (
            <div className={'where'}>
                <div className={'where-row'}>
                    <div className={'sb20-20 m-sb16'}>Циан</div>
                    <div className={'s16 m-s16'}>Если объявление отмечено словом «Собственник» — значит, он
                        предоставил сервису документы на собственностьНе нужно платить, чтобы увидеть
                        контакты собственника
                    </div>
                </div>
                <div className={'where-row'}>
                    <div className={'sb20-20 m-sb16'}>Яндекс-недвижимость и <br/> Яндекс-аренда</div>
                    <div className={'s16 m-s16'}>Можно посмотреть, за сколько сдавали квартиры в этом доме, в
                        разделе «Оценка квартиры по адресу». А с помощью фильтра «Квартиры от Аренды» в
                        результатах поиска «Яндекс-аренды» — найти жилье без комиссии и залога
                    </div>
                </div>
                <div className={'where-row'}>
                    <div className={'sb20-20 m-sb16'}>Авито</div>
                    <div className={'s16 m-s16'}>Можно перейти в профиль продавца и посмотреть, что еще он
                        сдает. Это популярный сайт, поэтому тут часто встречаются мошенники
                    </div>
                </div>
                <div className={'where-row'}>
                    <div className={'sb20-20 m-sb16'}>Локалс</div>
                    <div className={'s16 m-s16'}>Нужно купить тариф «Буду искать сам» за 2900 ₽, чтобы
                        получить доступ к проверенным объявлениям
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
