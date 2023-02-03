export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class InvalidPasswordLength extends CustomError{ 
    constructor(){
        super(400, "Senha inválida, a senha precisa ter 6 caracteres ou mais")
    }
}


export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}



// Custom errors dos endpoints de post

export class InvalidDescription extends CustomError{ 
    constructor(){
        super(400, "Descrição inválida, a descrição precisa ter 6 caracteres ou mais.")
    }
}

export class InvalidPhoto extends CustomError{ 
    constructor(){
        super(400, `Foto inválida, a foto precisa ser no formato "jpg" ou "png"`)
    }
}

export class InvalidType extends CustomError{ 
    constructor(){
        super(400, `Tipo inválido, deverá informar se é um post de "Evento" ou "Normal"`)
    }
}

export class InvalidDate extends CustomError{ 
    constructor(){
        super(400, `Tipo inválido, deverá informar a data no formato "ano/mês/dia"`)
    }
}

export class NotAuthor extends CustomError{
    constructor(){
        super(400, "Favor inserir a identificação do autor")
    }
}

export class NotId extends CustomError{
    constructor(){
        super(400, "Favor inserir o id do post")
    }
}