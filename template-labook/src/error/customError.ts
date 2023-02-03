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
        super(400, `Foto inválida, a foto precisa ser no formato "jpeg" ou "png"`)
    }
}