/* eslint-disable prettier/prettier */
import { Post } from "src/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ nullable: true })
    bio?: string;

    @Column({ default: 0 })
    followers: number;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];
}
