import { STRING, UUID, UUIDV4 } from 'sequelize';
import { database } from '../../../core';

const RoomModel = database.define('Room', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
});

export default { RoomModel };
