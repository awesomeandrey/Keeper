import RecordProxy from "../common/RecordProxy";
import FieldNames from "./folder-field-names";
import getFolderFieldDefinitions from "./folder-field-defs";

import {Label} from "../../../translation/LabelService";

class FolderProxy extends RecordProxy {
    constructor(props) {
        super(props);
        this.fields = getFolderFieldDefinitions();
    }

    static populateWithFolderOptions(fieldDef, folders) {
        const rootFolderOption = {label: Label.RootFolderName, value: ""};
        if (!fieldDef.value) {
            fieldDef.value = rootFolderOption.value;
        }
        fieldDef.options = folders.map(_ => ({label: _[FieldNames.NAME], value: _[FieldNames.ID]}));
        fieldDef.options.unshift(rootFolderOption);
        return fieldDef;
    }

    get parentId() {
        return this.record[FieldNames.PARENT_ID];
    }

    set parentId(value) {
        this.record[FieldNames.PARENT_ID] = value;
    }

    get fieldsForView() {
        return [
            this.fields[FieldNames.PARENT_ID],
            this.fields[FieldNames.NAME]
        ];
    }

    get fieldsForCreate() {
        return [
            this.fields[FieldNames.PARENT_ID],
            this.fields[FieldNames.NAME]
        ];
    }

    get fieldsForEdit() {
        return [
            this.fields[FieldNames.PARENT_ID],
            this.fields[FieldNames.NAME]
        ];
    }

    toCreateFields(folders, parentFolder) {
        return super.toCreateFields()
            .map(fieldDef => {
                if (fieldDef.name === FieldNames.PARENT_ID) {
                    fieldDef = FolderProxy.populateWithFolderOptions(fieldDef, folders);
                    if (parentFolder) {
                        fieldDef.value = parentFolder[FieldNames.ID];
                    }
                }
                return fieldDef;
            });
    }

    toEditFields(folders) {
        return super.toEditFields()
            .map(fieldDef => {
                if (fieldDef.name === FieldNames.PARENT_ID) {
                    fieldDef = FolderProxy.populateWithFolderOptions(fieldDef, folders);
                    fieldDef.options = fieldDef.options.filter(_ => _.value !== this.record[FieldNames.ID]);
                }
                return fieldDef;
            });
    }
}

export default FolderProxy;