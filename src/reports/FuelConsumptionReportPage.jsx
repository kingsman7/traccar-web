import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import ReportFilter from './components/ReportFilter';
import { useTranslation } from '../common/components/LocalizationProvider';
import PageLayout from '../common/components/PageLayout';
import ReportsMenu from './components/ReportsMenu';
import ColumnSelect from './components/ColumnSelect';
import { useCatch } from '../reactHelper';
import useReportStyles from './common/useReportStyles';
import { LocalGasStation } from '@mui/icons-material';
import scheduleReport from './common/scheduleReport';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
  reportContainer : {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
      marginLeft: '20px',
  },
  h1 : {
      color: '#333',
      marginBottom: '20px',
  },
  reportBox : {
      backgroundColor: '#f4bf8ea1',
      border: '1px solid #e56a00',
      borderRadius: '4px',
      padding: '15px',
  },
  fuelAmount : {
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: '#e56a00',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }
}));

const FuelReportPage = () => {
  const navigate = useNavigate();
  const reportClasses = useReportStyles();
  const classes = useStyles();
  const t = useTranslation();
  const API_URL = 'https://tts.transtechsolutions.io/api/services/reports/fuel';
  const [available, setAvailable] = useState([]);
  const [columns, setColumns] = useState(['dateTime', 'fuelRemaining']);
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSubmit = useCatch(async ({ deviceIds, from, to, type }) => {

    const formatFrom = from.split('T')[0];
    const formatTo = to.split('T')[0];
    const queryString = `deviceId=${deviceIds.join(',')}&startDate=${formatFrom}&endDate=${formatTo}`;
    if (type === 'export') {
      window.location.assign(`${API_URL}/export/excel-totail?${queryString}`);
    } else {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/totail?${queryString}`, {
          headers: { Accept: 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          data.hasOwnProperty('fuel') ? setItems(data) : setItems({fuel: 0});
        } else {
          throw Error(await response.text());
        }
      } finally {
        setLoading(false);
      }
    }
  });

 

  const handleSchedule = useCatch(async (deviceIds, groupIds, report) => {
    report.type = 'route';
    const error = await scheduleReport(deviceIds, groupIds, report);
    if (error) {
      throw Error(error);
    } else {
      navigate('/reports/scheduled');
    }
  });
  return (
    <PageLayout menu={<ReportsMenu />} breadcrumbs={['reportTitle', 'reportRoute']}>
      <div className={reportClasses.container}>
        <div className={reportClasses.containerMain}>
          <div className={reportClasses.header}>
            <ReportFilter handleSubmit={handleSubmit} handleSchedule={handleSchedule} loading={loading}>
              <ColumnSelect
                columns={columns}
                setColumns={setColumns}
                columnsArray={available}
                rawValues
              />
            </ReportFilter>
          </div>
          <div className={classes.reportContainer}>
            {!loading ?<> <h1 className={classes.h1}>{t('positionFuelConsumption')}</h1>
            <div className={classes.reportBox}>
                <p>{t('positionFuelConsumptionResult')}:</p>
                <p className={classes.fuelAmount}> {items?.fuel} {items?.fuel != null && <LocalGasStation fontSize='large' />}</p>
            </div> </>:
            <Stack spacing={1}>
              <Skeleton variant="rounded" width={260} height={120} />
              <Skeleton variant="rounded" width={260} height={140} />
            </Stack>}
          </div> 
        </div>
      </div>
    </PageLayout>
  );
};

export default FuelReportPage;
