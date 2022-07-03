import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const NotifySuccess = (msg) => {
    toast.success(`${msg}`);
};

export const NotifyError = (msg) => {
    toast.error(`${msg}`);
};

export const NotifyWarning = (msg) => {
    toast.warning(`${msg}`);
};

export const NotifyInfo = (msg) => {
    toast.info(`${msg}`);
}