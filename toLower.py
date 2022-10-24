import json

with open('list.json', 'r') as f:
    data = json.load(f)

    def toLower(ele):
        ele["title"] = ele["title"].lower()
        ele["author"] = ele["author"].lower()
        ele["tier"] = ele["tier"].lower()
        ele["parody"] = ele["parody"].lower()
        if ele["siteTags"] != "None":
            ele["siteTags"]["tags"] = list(map(
                lambda x: x.lower(), ele["siteTags"]["tags"]))
            ele["siteTags"]["characters"] = list(map(
                lambda x: x.lower(), ele["siteTags"]["characters"]))
        ele["tags"] = list(map(lambda x: x.lower(), ele["tags"]))
        return ele
    data["table"] = list(map(toLower, data["table"]))

    with open('APIList.json', 'w') as fw:
        json.dump(data, fw)
