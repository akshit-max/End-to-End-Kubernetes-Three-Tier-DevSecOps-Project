import axios from "axios";
const apiUrl = "http://a4e52a961b01d4f0b9b172e937adf47f-200366777.ap-south-1.elb.amazonaws.com:3500/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
