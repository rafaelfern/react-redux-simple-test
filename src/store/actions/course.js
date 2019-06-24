export function toggleLesson(module, lesson) {
    /*
        Retorna sempre um objeto. Que precisa ter um formato padrão: 
            1- Type: Indica qual ação está sendo realizada. Ação única dentro do redux
            2- Qualquer outr informação.
    */
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    };
}

