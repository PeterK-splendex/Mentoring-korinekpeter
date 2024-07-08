import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../events/event.entity';
import { User } from '../users/user.entity';
//Ez a táblázat a likeokat, dislikeokat tárolja
@Entity()
export class Reaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Event, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'eventId', referencedColumnName: 'id' })
  event: Event;

  @Column({ nullable: true })
  isLiked: boolean;
}
