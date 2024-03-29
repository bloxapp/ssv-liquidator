// import moment from 'moment-timezone';
import {
  Index,
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// const DEFAULT_TIMEZONE = 'Asia/Jerusalem';
// const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss';

@Entity()
@Index(['owner', 'operatorIds'], { unique: true })
export class Cluster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner: string;

  @Column('int', { array: true })
  operatorIds: number[];

  @Column({ type: 'text' })
  cluster: string;

  @Column({ default: null })
  burnRate: number;

  @Column({ default: null })
  balance: number;

  @Column({ default: false })
  isLiquidated: boolean;

  @Column({ default: null })
  liquidationBlockNumber: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  insertCreated() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  insertUpdated() {
    this.updatedAt = new Date();
  }
}
