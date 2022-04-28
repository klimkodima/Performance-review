import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import styled from '@emotion/styled';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

type TCorrespondence = {
  correspondenceText: string;
  correspondenceImg: any;
};

const smileStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%'
};

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    border: '2px #797979 solid',
    backgroundColor: '#fff',
    color: '#030303',
    maxWidth: 170,
    textAlign: 'center'
  }
});

const CustomTooltip: FC<{ percent: number }> = ({ percent }) => {
  const { t } = useTranslation('common', { keyPrefix: 'criteria' });
  const correspondenceStatus: TCorrespondence[] = [
    {
      correspondenceText: t('goodCorrespondenceText'),
      correspondenceImg: (
        <SentimentSatisfiedAltIcon sx={{ ...smileStyle, bgcolor: 'green' }} />
      )
    },
    {
      correspondenceText: t('normalCorrespondenceText'),
      correspondenceImg: (
        <SentimentSatisfiedIcon sx={{ ...smileStyle, bgcolor: 'yellow' }} />
      )
    },
    {
      correspondenceText: t('badCorrespondenceText'),
      correspondenceImg: (
        <SentimentVeryDissatisfiedIcon sx={{ ...smileStyle, bgcolor: 'red' }} />
      )
    }
  ];

  const [goodCorrespondence, normalCorrespondence, badCorrespondence] =
    correspondenceStatus;
  let correspondence: TCorrespondence = {
    correspondenceText: '',
    correspondenceImg: ''
  };
  if (percent >= 80 && percent <= 100) {
    correspondence = goodCorrespondence;
  }
  if (percent >= 60 && percent <= 80) {
    correspondence = normalCorrespondence;
  }
  if (percent >= 0 && percent <= 59) {
    correspondence = badCorrespondence;
  }

  return (
    <CustomWidthTooltip
      title={correspondence.correspondenceText}
      data-testid='criteria-item-tooltip'
      leaveDelay={200}
    >
      {correspondence.correspondenceImg}
    </CustomWidthTooltip>
  );
};

export default CustomTooltip;
