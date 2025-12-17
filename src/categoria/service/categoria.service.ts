import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";


@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) { }
    
    //criar
    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }
   
    //todos
    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
           
        });
    }

    //todos
    async findById(id: number): Promise<Categoria> {
        let categoria = await this.categoriaRepository.findOne({
            where: { id },
          
        });

        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria;
    }

   //por nome específico
    async findByNome(nome: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                nome: ILike(`%${nome}%`) 
            },
            
        });
    }
    
   //atualizar
    async update(categoria: Categoria): Promise<Categoria> {
        let buscaCategoria = await this.findById(categoria.id);

        if (!buscaCategoria || !categoria.id)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        let buscaCategoria = await this.findById(id);

        if (!buscaCategoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.delete(id);
    }
}