import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Earning {
  @PrimaryColumn()
  hash: string;

  @Column({ default: null })
  gasPrice: number;

  @Column({ default: null })
  gasUsed: number;

  @Column({ default: null })
  earned: number;

  @Column({ default: null })
  earnedAtBlock: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
