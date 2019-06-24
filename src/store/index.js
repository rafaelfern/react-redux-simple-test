import { createStore } from 'redux';

import rootReducer from './reducers';

/*
    O reducer é uma função que é chamada pelo Redux de uma forma automática em alguns
    momentos da aplicação.
    Recebe como parâmetro toda vez que a action é disparada, ou quando o store é construído.
    Um estado anterior a alteração, e a action como segundo parâmetro
    (inicialState, action)
*/

/*
    1- Reducer sempre vai armazenar os estados e manipula-los.
    2- Actions - São ações que a gente passa pro redux, indicando que a gente precisa manipular
        o estado. Ações do usuário ou que aconteceram na aplicação.
*/

const store = createStore(rootReducer);

export default store;
