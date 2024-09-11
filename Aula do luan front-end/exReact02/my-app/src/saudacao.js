import React, {Component} from 'react'

export default class Saudacao extends Component{
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    };

    constructor(props){
        super(props);
        this.setTipo = this.setTipo.bind(this);
    }
} 