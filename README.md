# 🏥 Projeto Final Bloco 02 – Sistema Farmácia

Este projeto faz parte do **Bloco 02** e tem como objetivo criar um sistema para gerenciamento de categorias de produtos de uma farmácia, utilizando **MySQL**, **NestJS** e boas práticas de desenvolvimento.

---

## ✅ Descrição do Projeto
O sistema gerencia categorias de produtos comercializados pela farmácia. Cada categoria possui um nome e uma descrição, permitindo organizar os produtos de forma eficiente.

---

## 📌 Estrutura do Banco de Dados
- **Nome do Banco:** `db_farmacia`
- **Tabela:** `tb_categorias`
- **Atributos:**
  - `id` (INT, PK, AUTO_INCREMENT)
  - `nome` (VARCHAR(100), NOT NULL)
  - `descricao` (VARCHAR(255), NOT NULL)

---

## 🔧 Scripts SQL

### 1. Criar Banco de Dados
```sql
CREATE DATABASE IF NOT EXISTS db_farmacia
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

### 2. Criar Tabela `tb_categorias`
```sql
USE db_farmacia;

CREATE TABLE IF NOT EXISTS tb_categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 3. Inserir 5 Registros
```sql
INSERT INTO tb_categorias (nome, descricao) VALUES
('Medicamentos', 'Produtos para tratamento e prevenção de doenças'),
('Cosméticos', 'Produtos para cuidados pessoais e beleza'),
('Vitaminas', 'Suplementos vitamínicos e minerais'),
('Higiene', 'Produtos para higiene pessoal e limpeza'),
('Infantil', 'Produtos destinados ao cuidado infantil');
```

### 4. Consultar Todas as Categorias
```sql
SELECT * FROM tb_categorias;
```

### 5. Consultar Categorias com a letra "C" no nome
```sql
SELECT * FROM tb_categorias
WHERE nome LIKE '%C%';
```

---

## 🌐 Configuração do Ambiente (.env)
Crie um arquivo `.env` na raiz do projeto com:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=senha_forte_aqui
DB_NAME=db_farmacia
```
Adicione `.env` ao `.gitignore` para não versionar credenciais.

---

## 🚀 Como Executar
1. Instale o MySQL e configure o banco.
2. Clone o repositório:
```bash
git clone https://github.com/JBechaire/projeto_final_bloco_02.git
cd projeto_final_bloco_02
```
3. Instale as dependências:
```bash
npm install
```
4. Configure o arquivo `.env`.
5. Execute a aplicação:
```bash
npm run start:dev
```

---

## 🧪 Testes com Insomnia
- Configure um **Environment** no Insomnia com:
```json
{
  "API_URL": "http://localhost:3000"
}
```
- Use `{{ API_URL }}/categorias` nas requisições.

Exemplo de requisição **POST** para cadastrar categoria:
```json
{
  "nome": "Medicamentos",
  "descricao": "Produtos para tratamento e prevenção de doenças"
}
```

---

## 🔮 Próximos Passos
- Criar tabela `tb_produtos` relacionada a `tb_categorias`.
- Implementar migrations para manter o banco atualizado.
- Adicionar autenticação JWT.

---

**Repositório:** [GitHub Projeto Final Bloco 02](https://github.com/JBechaire/projeto_final_bloco_02)
