import type { ChartCardTone } from '@mariasan001/ui-wc';
import type { EChartsOption } from 'echarts';

import type { ChartKind } from './chart-data';

export type GobChartPalette = {
  accent: string;
  muted: string;
  title: string;
  track: string;
  series: [string, string, string];
};

export function paletteForTone(tone: ChartCardTone): GobChartPalette {
  switch (tone) {
    case 'accent':
      return {
        accent: '#BC945A',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#BC945A', '#9F2141', '#6B655C'],
      };
    case 'dark':
      return {
        accent: '#181511',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#181511', '#9F2141', '#BC945A'],
      };
    case 'neutral':
      return {
        accent: '#6B655C',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#6B655C', '#9F2141', '#BC945A'],
      };
    case 'soft':
      return {
        accent: '#A67C52',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#A67C52', '#9F2141', '#6B655C'],
      };
    default:
      return {
        accent: '#9F2141',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#9F2141', '#BC945A', '#6B655C'],
      };
  }
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '');
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((ch) => ch + ch)
          .join('')
      : clean;
  const n = Number.parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const font = 'Raleway, Gotham, sans-serif';

function modernTooltip() {
  return {
    backgroundColor: '#181511',
    borderWidth: 0,
    padding: [10, 14] as [number, number],
    textStyle: {
      color: '#fff',
      fontFamily: font,
      fontSize: 12,
      fontWeight: 600 as const,
    },
    extraCssText: 'border-radius:10px;',
  };
}

function axisCategory(p: GobChartPalette, data: string[]) {
  return {
    type: 'category' as const,
    data,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: p.muted,
      fontFamily: font,
      fontSize: 11,
      fontWeight: 600 as const,
      margin: 12,
    },
  };
}

function axisValue(p: GobChartPalette) {
  return {
    type: 'value' as const,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: p.muted,
      fontFamily: font,
      fontSize: 11,
      fontWeight: 500 as const,
    },
    splitLine: {
      lineStyle: {
        color: p.track,
        type: 'solid' as const,
        width: 1,
      },
    },
  };
}

function anim() {
  return {
    animation: true,
    animationDuration: 700,
    animationEasing: 'cubicOut' as const,
  };
}

export function buildChartOption(
  kind: ChartKind,
  palette: GobChartPalette,
): EChartsOption {
  const [a, b, c] = palette.series;
  const tip = modernTooltip();

  if (kind === 'area') {
    return {
      ...anim(),
      color: [a, b, c],
      grid: { left: 4, right: 8, top: 24, bottom: 4, containLabel: true },
      tooltip: {
        trigger: 'axis',
        ...tip,
        axisPointer: {
          type: 'line',
          lineStyle: { color: hexToRgba(a, 0.25), width: 1 },
        },
      },
      xAxis: {
        ...axisCategory(palette, ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']),
        boundaryGap: false,
      },
      yAxis: axisValue(palette),
      series: [
        {
          name: 'Presencial',
          type: 'line',
          stack: 'total',
          smooth: 0.35,
          showSymbol: false,
          lineStyle: { width: 2, color: a },
          areaStyle: { color: hexToRgba(a, 0.22), opacity: 1 },
          emphasis: { focus: 'series' },
          data: [42, 48, 51, 46, 58, 62],
        },
        {
          name: 'Digital',
          type: 'line',
          stack: 'total',
          smooth: 0.35,
          showSymbol: false,
          lineStyle: { width: 2, color: b },
          areaStyle: { color: hexToRgba(b, 0.22), opacity: 1 },
          emphasis: { focus: 'series' },
          data: [28, 34, 39, 44, 49, 55],
        },
        {
          name: 'Telefonico',
          type: 'line',
          stack: 'total',
          smooth: 0.35,
          showSymbol: false,
          lineStyle: { width: 2, color: c },
          areaStyle: { color: hexToRgba(c, 0.18), opacity: 1 },
          emphasis: { focus: 'series' },
          data: [18, 16, 20, 17, 15, 19],
        },
      ],
    };
  }

  if (kind === 'line') {
    return {
      ...anim(),
      color: [a, b],
      grid: { left: 4, right: 10, top: 24, bottom: 4, containLabel: true },
      tooltip: {
        trigger: 'axis',
        ...tip,
        axisPointer: {
          type: 'line',
          lineStyle: { color: hexToRgba(a, 0.2), width: 1 },
        },
      },
      xAxis: axisCategory(palette, [
        'S1',
        'S2',
        'S3',
        'S4',
        'S5',
        'S6',
        'S7',
        'S8',
      ]),
      yAxis: axisValue(palette),
      series: [
        {
          name: 'Real',
          type: 'line',
          smooth: 0.35,
          symbol: 'circle',
          symbolSize: 8,
          showSymbol: true,
          lineStyle: { width: 2.5, color: a },
          itemStyle: {
            color: a,
            borderColor: '#fff',
            borderWidth: 2,
          },
          areaStyle: { color: hexToRgba(a, 0.1) },
          emphasis: { focus: 'series' },
          data: [120, 132, 128, 145, 160, 158, 172, 186],
        },
        {
          name: 'Meta',
          type: 'line',
          smooth: 0.2,
          symbol: 'none',
          lineStyle: {
            width: 2,
            type: 'dashed',
            color: b,
          },
          data: [130, 130, 140, 140, 155, 155, 170, 170],
        },
      ],
    };
  }

  if (kind === 'donut') {
    const total = 42 + 33 + 25;
    return {
      ...anim(),
      color: [a, b, c],
      tooltip: {
        trigger: 'item',
        ...tip,
        formatter: '{b}: <b>{c}</b> ({d}%)',
      },
      graphic: [
        {
          type: 'group',
          left: 'center',
          top: 'center',
          children: [
            {
              type: 'text',
              style: {
                text: String(total),
                fill: palette.title,
                font: `800 28px ${font}`,
                align: 'center',
                verticalAlign: 'middle',
                y: -8,
              },
            },
            {
              type: 'text',
              style: {
                text: 'TOTAL',
                fill: palette.muted,
                font: `700 10px ${font}`,
                align: 'center',
                verticalAlign: 'middle',
                y: 16,
              },
            },
          ],
        },
      ],
      series: [
        {
          type: 'pie',
          radius: ['56%', '76%'],
          center: ['50%', '52%'],
          padAngle: 3,
          itemStyle: {
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 3,
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{d}%',
            color: palette.muted,
            fontFamily: font,
            fontWeight: 700,
            fontSize: 11,
          },
          labelLine: {
            length: 10,
            length2: 8,
            lineStyle: { color: hexToRgba(palette.title, 0.16) },
          },
          emphasis: { scale: true, scaleSize: 4 },
          data: [
            { value: 42, name: 'Norte' },
            { value: 33, name: 'Centro' },
            { value: 25, name: 'Sur' },
          ],
        },
      ],
    };
  }

  if (kind === 'radar') {
    return {
      ...anim(),
      color: [a, b],
      tooltip: { ...tip, trigger: 'item' },
      radar: {
        indicator: [
          { name: 'Agilidad', max: 100 },
          { name: 'Claridad', max: 100 },
          { name: 'Acceso', max: 100 },
          { name: 'Soporte', max: 100 },
          { name: 'Confianza', max: 100 },
        ],
        center: ['50%', '52%'],
        radius: '68%',
        splitNumber: 4,
        axisName: {
          color: palette.muted,
          fontSize: 11,
          fontWeight: 700,
          fontFamily: font,
        },
        splitLine: { lineStyle: { color: palette.track } },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['#fff', hexToRgba(palette.title, 0.03)],
          },
        },
        axisLine: { lineStyle: { color: hexToRgba(palette.title, 0.1) } },
      },
      series: [
        {
          type: 'radar',
          symbol: 'circle',
          symbolSize: 6,
          data: [
            {
              value: [86, 78, 91, 74, 88],
              name: 'Actual',
              lineStyle: { width: 2, color: a },
              itemStyle: { color: a, borderColor: '#fff', borderWidth: 2 },
              areaStyle: { color: hexToRgba(a, 0.16) },
            },
            {
              value: [70, 72, 68, 80, 75],
              name: 'Meta',
              lineStyle: { width: 2, type: 'dashed', color: b },
              itemStyle: { color: b, borderColor: '#fff', borderWidth: 2 },
              areaStyle: { color: hexToRgba(b, 0.08) },
            },
          ],
        },
      ],
    };
  }

  if (kind === 'heatmap') {
    const hours = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'];
    const slots = ['08h', '10h', '12h', '14h', '16h'];
    const data: [number, number, number][] = [];
    const values = [
      [2, 4, 6, 3, 1],
      [5, 8, 9, 7, 4],
      [3, 6, 10, 8, 5],
      [4, 7, 8, 9, 6],
      [1, 3, 5, 4, 2],
    ];
    for (let y = 0; y < slots.length; y += 1) {
      for (let x = 0; x < hours.length; x += 1) {
        data.push([x, y, values[y][x]]);
      }
    }
    return {
      ...anim(),
      grid: { left: 42, right: 10, top: 12, bottom: 32 },
      tooltip: {
        ...tip,
        position: 'top',
        formatter: (params: unknown) => {
          const p = params as { data?: [number, number, number] };
          const d = p.data;
          if (!d) return '';
          return `${hours[d[0]]} · ${slots[d[1]]}<br/><b>${d[2]}</b> tickets`;
        },
      },
      xAxis: {
        ...axisCategory(palette, hours),
        splitArea: { show: false },
      },
      yAxis: {
        type: 'category',
        data: slots,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: palette.muted,
          fontFamily: font,
          fontSize: 11,
          fontWeight: 600,
        },
        splitArea: { show: false },
      },
      visualMap: {
        show: true,
        orient: 'horizontal',
        left: 'center',
        bottom: 0,
        min: 0,
        max: 10,
        itemWidth: 10,
        itemHeight: 72,
        textStyle: {
          color: palette.muted,
          fontFamily: font,
          fontSize: 10,
          fontWeight: 600,
        },
        inRange: {
          color: [
            hexToRgba(a, 0.1),
            hexToRgba(a, 0.35),
            hexToRgba(a, 0.65),
            a,
          ],
        },
      },
      series: [
        {
          type: 'heatmap',
          data,
          label: {
            show: true,
            color: palette.title,
            fontFamily: font,
            fontWeight: 700,
            fontSize: 11,
          },
          itemStyle: {
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 3,
          },
          emphasis: {
            itemStyle: { borderColor: palette.title, borderWidth: 1 },
          },
        },
      ],
    };
  }

  if (kind === 'gauge') {
    return {
      ...anim(),
      series: [
        {
          type: 'gauge',
          startAngle: 210,
          endAngle: -30,
          min: 0,
          max: 100,
          radius: '92%',
          center: ['50%', '56%'],
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 16,
              color: [[1, palette.track]],
            },
          },
          progress: {
            show: true,
            roundCap: true,
            width: 16,
            itemStyle: { color: a },
          },
          pointer: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          anchor: { show: false },
          title: {
            show: true,
            offsetCenter: [0, '28%'],
            color: palette.muted,
            fontFamily: font,
            fontSize: 11,
            fontWeight: 700,
          },
          detail: {
            valueAnimation: true,
            fontSize: 34,
            fontWeight: 800,
            fontFamily: font,
            color: palette.title,
            offsetCenter: [0, '0%'],
            formatter: '{value}%',
          },
          data: [{ value: 74, name: 'CUMPLIMIENTO' }],
        },
      ],
    };
  }

  const barData = [420, 532, 401, 634, 490, 580, 520];
  const max = Math.max(...barData);

  return {
    ...anim(),
    color: [a],
    grid: { left: 4, right: 8, top: 28, bottom: 4, containLabel: true },
    tooltip: {
      trigger: 'axis',
      ...tip,
      axisPointer: {
        type: 'shadow',
        shadowStyle: { color: hexToRgba(a, 0.06) },
      },
    },
    xAxis: axisCategory(palette, [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
    ]),
    yAxis: axisValue(palette),
    series: [
      {
        type: 'bar',
        barWidth: '42%',
        showBackground: true,
        backgroundStyle: {
          color: palette.track,
          borderRadius: [8, 8, 4, 4],
        },
        itemStyle: {
          borderRadius: [8, 8, 4, 4],
          color: a,
        },
        emphasis: {
          itemStyle: { color: a, opacity: 0.85 },
        },
        data: barData.map((value) => {
          if (value !== max) return value;
          return {
            value,
            itemStyle: { color: a, borderRadius: [8, 8, 4, 4] },
            label: {
              show: true,
              position: 'top' as const,
              distance: 6,
              color: a,
              fontFamily: font,
              fontWeight: 800 as const,
              fontSize: 11,
              formatter: '{c}',
            },
          };
        }),
      },
    ],
  };
}
