import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configuration/db.js";

class Task extends Model {}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Task",
        tableName: "tasks",
        updatedAt: false,
        createdAt: "created_at",
    }
);

export default Task;
