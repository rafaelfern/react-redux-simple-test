import React from 'react';
import { connect } from 'react-redux';
import * as CourseActions from '../../store/actions/course';

/*
    1- Todo componente que chama o connect do react-redux, recebe um dispatch,
        que serve para 'disparar' as actions para o redux. E essas actions serão
        ouvidas por todos os reducers da aplicação.

    2- A action retorna sempre um objeto com padrão de uma chave chamada type
        que indica qual ação está sendo realizada
*/

const Sidebar = ({ modules, dispatch }) => {

    return(
        
        <aside>
            {modules.map(module => (
                <div key={module.id}>
                    <strong>{ module.title }</strong>
                    <ul>
                        { module.lessons.map(lesson => (
                            <li key={ lesson.id }>
                                { lesson.title } 
                                <button onClick={
                                        () => dispatch(CourseActions.toggleLesson(module, lesson))
                                    }
                                >
                                Selecionar        
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )) }
        </aside>
        
    );
}

/*
    3- Connect recebe um parâmetro que indica o estado, e deve retornar quais estados eu quero do estado inicial.
    No caso quero retornar um componente chamado modules quee recebe o state por inteiro, que no caso está dentro
        do store
    ( { modules: state } )
*/

export default connect(state => ({ modules: state.course.modules }))(Sidebar);
