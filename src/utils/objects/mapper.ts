export interface IMapper<DTO, Entity, Record> {
    fromRecordToDTO(record: Partial<Record>): Partial<DTO>;
    fromEntityToDTO(entity: Entity): DTO;
    fromDTOToRecord(dto: Partial<DTO>): Partial<Record>;
    fromDTOToEntity(dto: DTO): Entity;
}
