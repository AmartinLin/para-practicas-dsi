import { Document, model, Schema } from 'mongoose';

interface FunkoDocumentInterface extends Document {
  name: string;
  description: string;
  type: 'Pop!' | 'Vynil Soda';
  genre: 'animation' | 'movies' | 'games' | 'sport' | 'music' | 'anime';
  franchise: string;
  number: number;
  exclusive: boolean;
  specialFeatures: string;
  marketValue: number;
}

const NoteSchema = new Schema<FunkoDocumentInterface>({
  name: {type: String},
  description: {type: String},
  type: {type: String},
  genre: {type: String},
  franchise: {type: String},
  number: {type: Number},
  exclusive: {type: Boolean},
  specialFeatures: {type: String},
  marketValue: {type: Number},
});

export const Funko = model<FunkoDocumentInterface>('Funko', NoteSchema);