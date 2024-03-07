import { consulta } from '../database/conexao.js'

class SelecaoRepository {
    // CRUD
    create( selecao ) {
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta( sql, selecao, 'Não foi possivel criar Seleção :( ')
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consulta( sql, 'Não foi possivel localizar :( ')
    }
    
    findById( id ) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta( sql, id, 'Não foi possivel localizar :( ')
    }
    
    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta( sql, [selecao, id], 'Não foi possivel atualizar seleção :( ')
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta( sql, id, 'Não foi possivel deletar seleção :(')
    }

    // checkId(id) {
    //     const sql = "SELECT * FROM selecoes "
    // }
}

export default new SelecaoRepository();
