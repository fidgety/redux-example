import list from '../components/list';
import add from '../components/add';

const page1 = store => {
    document.write('<div id="list"></div><div id="add"></div>');
    list(store);
    add(store);
};

export default page1;
