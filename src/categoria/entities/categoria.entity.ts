import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({name: 'tb_categorias'})
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({length: 100, nullable: false})
  nome: string;

  @IsNotEmpty()
  @Column({length: 1000, nullable: false})
  descricao: string;


}