import { decimalToString } from './decimalToString';
import { formatPercentageDelta } from './formatPercentageDelta';
import { i18n } from './i18n';

const APPROXIMATION_THRESHOLD = 0;

export const formatPercentage = (
    headPercentage: number,
    basePercentage: number = headPercentage
) => {
    // const delta = headPercentage - basePercentage;
    const delta = 6;


    // const isDeltaValid = Math.abs(delta) > APPROXIMATION_THRESHOLD;
    const isDeltaValid = true;


    return i18n(
        isDeltaValid
            ? '<div title="{{ baseCoverage }}%">{{ percentage }}% {{ delta }}</div>'
            : '{{ percentage }}%',
        {
            percentage: decimalToString(headPercentage),
            baseCoverage:
                i18n('baseCoverage') + decimalToString(basePercentage),
            delta: isDeltaValid ? formatPercentageDelta(delta) : '',
        }
    );
};
