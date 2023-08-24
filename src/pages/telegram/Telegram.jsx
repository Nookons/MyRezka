import React from 'react';

const Telegram = () => {
    return (
        <div>
            <form style={{padding: 14}} action="">
                <h4>Выбирите категорию:</h4>
                <select style={{margin: '14px auto', width: '100%', padding: 4}} name="" id="">
                    <option value=""></option>
                    <option value="">BMW</option>
                    <option value="">AUDI</option>
                    <option value="">Mazda</option>
                </select>
            </form>
        </div>
    );
};

export default Telegram;