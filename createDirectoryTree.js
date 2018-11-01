//  已经排序过的数据！
const showData = [{
    id: 1,
    parentID: 0,
    text: 'egg-project',
}, {
    id: 2,
    parentID: 1,
    text: 'package.json',
}, {
    id: 3,
    parentID: 1,
    text: 'app',
}, {
    id: 4,
    parentID: 3,
    text: 'router.js',
}, {
    id: 5,
    parentID: 3,
    text: 'controller',
}, {
    id: 6,
    parentID: 5,
    text: 'home.js',
}, {
    id: 7,
    parentID: 3,
    text: 'middleware',
}, {
    id: 8,
    parentID: 1,
    text: 'config',
}, {
    id: 9,
    parentID: 8,
    text: 'plugin.js'
}, {
    id: 10,
    parentID: 8,
    text: 'config.unittest.js'
}, {
    id: 11,
    parentID: 1,
    text: 'test'
}, {
    id: 12,
    parentID: 11,
    text: 'middleware'
}, {
    id: 13,
    parentID: 12,
    text: 'response_time.test.js'
}, {
    id: 14,
    parentID: 11,
    text: 'controller'
}, {
    id: 15,
    parentID: 14,
    text: 'home.test.js'
}];

//  获取某元素所有子节点
const getChildNodes = (id) => (
    showData.filter((item) => (item.parentID == id))
);

//  构造每层节点前缀
const createPre = (level) => {
    if (level < 2) {
        return '';
    }
    let str = '';
    for (let i = 0; i < level - 2; i++) {
        str += '|  ';
    }
    return str;
}

//  根据ID获取最新的行序号
const getIndexByID = (id) => {
    for (let i = 0; i < finalShow.length; i++) {
        if (finalShow[i].id == id) {
            return i;
        }
    }
    return -1;
}

//  找出一行数据中所有  '|'  位置
const findCharV = (str) => {
    let pos = [];
    for (let i in str) {
        if (str[i] == '|') {
            pos.push(i);
        }

        if (str[i] == '└') {
            break;
        }
    }
    return pos;
}

//  （虚拟）根节点ID
const rootID = 0;

//  最终呈现数据
let finalShow = [];

//  初始化一次获取根节点数据
let rootChildren = getChildNodes(rootID);
rootChildren.forEach(({ id, text }) => {
    finalShow.push({ id, text });
});

//  递归构造节点
const createNodes = (treeNodes, level) => {
    let tempNodes = [...treeNodes];
    tempNodes.forEach((item) => {
        let childNodes = getChildNodes(item.id);
        childNodes.forEach((child, childIndex) => {
            let isLast = (childIndex == childNodes.length - 1);
            finalShow.splice(getIndexByID(item.id) + 1 + childIndex, 0, {
                id: child.id,
                text: createPre(level) + (isLast ? `└── ${child.text}` : `├── ${child.text}`)
            });
        })
        childNodes.length && createNodes(childNodes, level + 1);
    })
}

createNodes(finalShow, 2);

//  最后处理
finalShow.forEach(({ text }, index) => {
    // 找出这一行中所有  '|'  位置, '|' 上方是 '└' 或 '' 即清空
    const pos = findCharV(text);
    const lastLine = finalShow[index - 1];

    let showAsList = Array.from(text);

    pos.forEach((p) => {
        if (lastLine.text[p] == ' ' || lastLine.text[p] == '└') {
            showAsList[p] = ' ';
        }
    })

    finalShow[index].text = showAsList.join('');
})


//  end
finalShow.forEach((item) => {
    console.log(item.text);
})
