import { } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDatabase {
    createDb() {
        const categories = [
            { id: 1, name: 'Lazer', description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saúde', description: 'Plano de Saúde e Receitas' },
            { id: 3, name: 'Moradia', description: 'Cinema, parques, praia, etc' },
            { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer' },
        ];
        return { categories }
    }
}

