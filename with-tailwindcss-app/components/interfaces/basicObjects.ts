export interface DepartmentData {
    id: number,
    title: string,
    subdivisions_array: SubdivisionData[],
    description: string,
    employee_count: number,
    responsible_peoples: ResponsiblePeople[],
    reports: any
}

export interface ResponsiblePeople {
    user_id: number,
    first_name: string,
    middle_name: string,
    last_name: string
}

export interface GroupData {
    id: number,
    title: string,
    description: string,
    count_members: number,
    responsible_person: ResponsiblePeople[]
}

export interface UserData {
    id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    users_department: DepartmentData[],
    users_group: GroupData[]
}

export interface SubdivisionData {
    id: number,
    title: string,
    description: string
}

export interface ChangeListTuple {
    value: number,
    label: string
}

export interface Entity {
    id: number,
    uuid: string,
    type: number
}

export interface ErrorBackend {
    code: number,
    message: string
}