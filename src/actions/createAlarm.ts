import WFFrequency from '../interfaces/WF/WFFrequency';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Create Alarm Action. Creates an alarm in the Clock app.
 *
 * ```js
 * createAlarm({
 *   label: 'Wake up!',
 *   time: '5:45AM',
 *   repeat: ['Saturday', 'Sunday'],
 * });
 * ```
 */
const createAlarm = (
  options: {
    /** The text for the alarm label */
    label?: WFSerialization | string,
    /** The time of the alarm */
    time: WFSerialization | string,
    /** When to repeat the alarm */
    repeat?: WFSerialization | WFFrequency[];
  },
): WFWorkflowAction => {
  const {
    label = '',
    time = '',
    repeat = [],
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.alarm.create',
    WFWorkflowActionParameters: {
      WFLabel: label,
      ...(time !== '' && { WFTime: time }),
      WFFrequency: repeat,
    },
  };
};

export default createAlarm;
