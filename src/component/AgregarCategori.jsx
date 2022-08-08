import { useState } from 'react';

export const AgregarCategoria = ({onNewCategory}) =>{
    
    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = ( { target }) => {
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue);
        if ( inputValue.trim().length <= 1 ) return;
        
        setInputValue('');
        onNewCategory( inputValue.trim() )
        //setCategories(categories => [inputValue, ...categories ]);
        
    }
    
    return (
        <form onSubmit={ onSubmit }>
        <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange } />
        </form>
    )
}