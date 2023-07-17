export default class Chamado{
    #id: string
    #aberto:boolean
    #nome: string
    #setor: string
    #subsetor: string
    #ilha: string
    #estacaotrabalho: string
    #equipamentocomdefeito: string
    #equipamentotombo: string
    #equipamentonumeroserie: string
    #descricao: string
    #equipesuport:string
    #status:string
    #observacao:string
    #createAt:Date
    #updateAt:Date

    constructor(aberto:boolean, nome:string, setor: string, subsetor: string, ilha: string, estacaotrabalho:string, equipamentocomdefeito:string, equipamentotombo: string, equipamentonumeroserie: string, descricao: string, equipesuport:string, status:string, observacao:string, id: string=null, createAt:Date, updateAt:Date){
        this.#aberto=aberto
        this.#nome=nome
        this.#setor=setor
        this.#subsetor=subsetor
        this.#ilha=ilha
        this.#estacaotrabalho=estacaotrabalho
        this.#equipamentocomdefeito=equipamentocomdefeito
        this.#equipamentotombo=equipamentotombo
        this.#equipamentonumeroserie=equipamentonumeroserie
        this.#descricao=descricao
        this.#equipesuport=equipesuport
        this.#status=status
        this.#observacao=observacao
        this.#createAt=createAt
        this.#updateAt=updateAt
        this.#id=id
    }

    static vazio(){
        return new Chamado(null,'','','','','','','','','','','','',null,null,null)
    }

    get id(){
        return this.#id
    }

    get aberto(){
        return this.#aberto
    }

    get nome(){
        return this.#nome
    }
    
    get setor(){
        return this.#setor
    }

    get subsetor(){
        return this.#subsetor
    }

    get ilha(){
        return this.#ilha
    }
    get estacaotrabalho(){
        return this.#estacaotrabalho
    }

    get equipamentocomdefeito(){
        return this.#equipamentocomdefeito
    }
    
    get equipamentotombo(){
        return this.#equipamentotombo
    }

    get equipamentonumeroserie(){
        return this.#equipamentonumeroserie
    }

    get descricao(){
        return this.#descricao
    }

    get equipesuport(){
        return this.#equipesuport
    }

    get status(){
        return this.#status
    }

    get observacao(){
        return this.#observacao
    }

    get createAt(){
        return this.#createAt
    }

    get updateAt(){
        return this.#updateAt
    }

}