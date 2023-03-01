import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';
import styles from '../components/ListFormCustomizer.module.scss';
import { DynamicForm } from "@pnp/spfx-controls-react/lib/DynamicForm";


export interface IListFormCustomizerProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

const LOG_SOURCE: string = 'ListFormCustomizer';

export default class ListFormCustomizer extends React.Component<IListFormCustomizerProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: ListFormCustomizer mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: ListFormCustomizer unmounted');
  }

  public render(): React.ReactElement<{}> {
    return <div className={styles.listFormCustomizer}>
      <h3>List Form Customizer Example</h3>
      <DynamicForm
        context={this.props.context as FormCustomizerContext}
        listId={this.props.context.list.guid.toString()}
        listItemId={this.props.context.itemId}
        onCancelled={() => { console.log('Cancelled') }}
        onBeforeSubmit={async (listItem) => { return false; }}
        onSubmitError={(listItem, error) => { alert(error.message); }}
        onSubmitted={async (listItemData) => { console.log(listItemData); }}
      />
    </div>;

  }
}
