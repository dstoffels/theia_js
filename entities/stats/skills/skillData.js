import { AGI, CON, DEX, STR } from '../attributes/constants.js';
import { WARRIOR } from '../archetypes/constants.js';
import { ARMOR, BLUDGEONS, POLEARMS, SWORDS, UNARMED } from './constants.js';

const SKILLS = [
	[UNARMED, AGI, CON, WARRIOR],
	[BLUDGEONS, STR, CON, WARRIOR],
	[POLEARMS, STR, AGI, WARRIOR],
	[SWORDS, DEX, STR, WARRIOR],
	[ARMOR, CON, STR, WARRIOR],
];

export default SKILLS;
