import formSubmit from "./formSubmit"

function Todo(title, description, dueDate, priority, project, completionStatus) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
    this.completionStatus = completionStatus
}



export default Todo;



