import { createStyles} from '@mantine/core'; 
export const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
  cardWork: {
    marginTop: 20,
  },
  stackTitle: {
    marginRight: 4,
  },
  cardWorkBody: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cardWorkBodyTitle: {
    width: '110%',
  },
  cardWorkBodyLeft: {
    width: '65%',
    marginRight: 30,
    [theme.fn.smallerThan(600)]: {
      width: '100%',
      margin: 'auto'
    }
  },
  cardWorkBodyRight: {
    width: '30%',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.fn.smallerThan(600)]: {
      width: '100%',
    }
  },
}));