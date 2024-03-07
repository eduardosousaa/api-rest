import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {

    async store(req, res) {
        const { selecao, grupo } = req.body;

        if (!selecao || !grupo) {
            return res.status(400).json({ message: "Os campos 'selecao' e 'grupo' são obrigatórios"})
        }

        try {
            const result = await SelecaoRepository.create(req.body)
            res.status(200).json({ message: "Seleção cadastrada com sucesso :)"})
        } catch (error) {
            return res.status(500).json({ message: "Não foi possível cadastrar a seleção" });
        }
    }

    async index(req, res) {
        const result = await SelecaoRepository.findAll()

        if (result.length == 0) {
            return res.status(204).json({ message: "A lista de seleções está vazia"})
        }

        try {
            res.json(result)
        } catch (error) {
            return res.status(500).json({ message: "Não foi possível localizar as seleções" });
        }
    }
    
    async show(req, res) {
        const id = req.params.id;

        const verificaId = await SelecaoRepository.findById(id);
        if (!verificaId || verificaId.length === 0) {
            return res.status(404).json({ message: "Seleção não encontrado com o ID fornecido" });
        }

        try {
            const result = await SelecaoRepository.findById(id)
            res.json(result)
        } catch (error) {
            return res.status(500).json({ message: "Não foi possível localizar a seleção" });
        }
    }

    async update(req, res) {
        const { selecao } = req.body;
        const id = req.params.id;

        if (!selecao) {
            return res.status(400).json({ message: "O campo 'selecao' é obrigatório"})
        }

        const verificaId = await SelecaoRepository.findById(id);
        if (!verificaId || verificaId.length === 0) {
            return res.status(404).json({ message: "Seleção não encontrado com o ID fornecido" });
        }

        try {
            const result = await SelecaoRepository.update(req.body, id)
            res.status(200).json({ message: "Seleção atualizada com sucesso :)"})
        } catch (error) {
            return res.status(500).json({ message: "Não foi possível atualizar a seleção" });
        }
        
        
    }
    async delete(req, res) {
        const id = req.params.id;

        const verificaId = await SelecaoRepository.findById(id);
        if (!verificaId || verificaId.length === 0) {
            return res.status(404).json({ message: "Seleção não encontrado com o ID fornecido" });
        }
        
        try {
            const result = await SelecaoRepository.delete(id)
            res.status(200).json({ message: "Seleção deletada com sucesso :)"})
        } catch (error) {
            return res.status(500).json({ message: "Não foi possível deletar a seleção" });
        }
    }

}
// padrão Singleton 
export default new SelecaoController();
