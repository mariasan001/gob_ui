import type { ChartCardTone } from '@mariasan001/ui-wc';
import type { EChartsOption } from 'echarts';

import type { ChartKind } from './chart-data';

export type GobChartPalette = {
  accent: string;
  mid: string;
  soft: string;
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
        mid: '#D4B483',
        soft: 'rgba(188, 148, 90, 0.22)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#BC945A', '#9F2141', '#6B655C'],
      };
    case 'dark':
      return {
        accent: '#181511',
        mid: '#4A453E',
        soft: 'rgba(24, 21, 17, 0.1)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#181511', '#9F2141', '#BC945A'],
      };
    case 'neutral':
      return {
        accent: '#6B655C',
        mid: '#9A9388',
        soft: 'rgba(24, 21, 17, 0.08)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#6B655C', '#9F2141', '#BC945A'],
      };
    case 'soft':
      return {
        accent: '#A67C52',
        mid: '#C4A57A',
        soft: 'rgba(231, 215, 189, 0.85)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#A67C52', '#9F2141', '#6B655C'],
      };
    default:
      return {
        accent: '#9F2141',
        mid: '#C45A73',
        soft: 'rgba(159, 33, 65, 0.16)',
        muted: '#8a8278',
        title: '#181511',
        track: 'rgba(24, 21, 17, 0.06)',
        series: ['#9F2141', '#BC945A', '#6B655C'],
      };
  }
}

const axisCommon = (p: GobChartPalette) => ({
  axisLine: { show: false },
  axisTick: { show: false },
  axisLabel: {
    color: p.muted,
    fontFamily: 'Raleway, Gotham, sans-serif',
    fontSize: 11,
  },
  splitLine: { lineStyle: { color: p.track, type: 'dashed' as const } },
});

export function buildChartOption(
  kind: ChartKind,
  palette: GobChartPalette,
): EChartsOption {
  const [a, b, c] = palette.series;

  if (kind === 'area') {
    return {
      color: [a, b, c],
      grid: { left: 8, right: 8, top: 16, bottom: 8, containLabel: true },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        ...axisCommon(palette),
      },
      yAxis: { type: 'value', ...axisCommon(palette) },
      series: [
        {
          name: 'Presencial',
          type: 'line',
          stack: 'total',
          smooth: 0.45,
          showSymbol: false,
          lineStyle: { width: 0 },
          areaStyle: { opacity: 0.85 },
          data: [42, 48, 51, 46, 58, 62],
        },
        {
          name: 'Digital',
          type: 'line',
          stack: 'total',
          smooth: 0.45,
          showSymbol: false,
          lineStyle: { width: 0 },
          areaStyle: { opacity: 0.75 },
          data: [28, 34, 39, 44, 49, 55],
        },
        {
          name: 'Telefonico',
          type: 'line',
          stack: 'total',
          smooth: 0.45,
          showSymbol: false,
          lineStyle: { width: 0 },
          areaStyle: { opacity: 0.65 },
          data: [18, 16, 20, 17, 15, 19],
        },
      ],
    };
  }

  if (kind === 'line') {
    return {
      color: [a, b],
      grid: { left: 8, right: 12, top: 20, bottom: 8, containLabel: true },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        ...axisCommon(palette),
      },
      yAxis: { type: 'value', ...axisCommon(palette) },
      series: [
        {
          name: 'Real',
          type: 'line',
          smooth: 0.5,
          symbol: 'circle',
          symbolSize: 7,
          lineStyle: { width: 3 },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: palette.soft },
                { offset: 1, color: 'rgba(255,255,255,0)' },
              ],
            },
          },
          data: [120, 132, 128, 145, 160, 158, 172, 186],
        },
        {
          name: 'Meta',
          type: 'line',
          smooth: 0.5,
          symbol: 'none',
          lineStyle: { width: 2, type: 'dashed' },
          data: [130, 130, 140, 140, 155, 155, 170, 170],
        },
      ],
    };
  }

  if (kind === 'donut') {
    return {
      color: [a, b, c],
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'pie',
          radius: ['58%', '82%'],
          center: ['50%', '52%'],
          padAngle: 3,
          itemStyle: { borderRadius: 8 },
          label: { show: false },
          emphasis: {
            scale: true,
            scaleSize: 6,
            itemStyle: { shadowBlur: 12, shadowColor: 'rgba(24,21,17,0.18)' },
          },
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
      color: [a, b],
      radar: {
        indicator: [
          { name: 'Agilidad', max: 100 },
          { name: 'Claridad', max: 100 },
          { name: 'Acceso', max: 100 },
          { name: 'Soporte', max: 100 },
          { name: 'Confianza', max: 100 },
        ],
        splitNumber: 4,
        axisName: {
          color: palette.muted,
          fontSize: 11,
          fontFamily: 'Raleway, Gotham, sans-serif',
        },
        splitLine: { lineStyle: { color: palette.track } },
        splitArea: {
          areaStyle: { color: ['rgba(255,255,255,0)', palette.soft] },
        },
        axisLine: { lineStyle: { color: palette.track } },
      },
      series: [
        {
          type: 'radar',
          symbol: 'circle',
          symbolSize: 5,
          lineStyle: { width: 2 },
          areaStyle: { opacity: 0.28 },
          data: [
            { value: [86, 78, 91, 74, 88], name: 'Actual' },
            { value: [70, 72, 68, 80, 75], name: 'Meta' },
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
      grid: { left: 36, right: 8, top: 8, bottom: 28 },
      tooltip: { position: 'top' },
      xAxis: {
        type: 'category',
        data: hours,
        splitArea: { show: false },
        ...axisCommon(palette),
      },
      yAxis: {
        type: 'category',
        data: slots,
        splitArea: { show: false },
        ...axisCommon(palette),
      },
      visualMap: {
        show: false,
        min: 0,
        max: 10,
        inRange: {
          color: [palette.soft, palette.mid, palette.accent],
        },
      },
      series: [
        {
          type: 'heatmap',
          data,
          itemStyle: {
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 3,
          },
          emphasis: {
            itemStyle: { shadowBlur: 8, shadowColor: 'rgba(24,21,17,0.2)' },
          },
        },
      ],
    };
  }

  if (kind === 'gauge') {
    return {
      series: [
        {
          type: 'gauge',
          startAngle: 210,
          endAngle: -30,
          min: 0,
          max: 100,
          radius: '100%',
          center: ['50%', '58%'],
          progress: {
            show: true,
            width: 14,
            itemStyle: { color: a },
          },
          axisLine: {
            lineStyle: {
              width: 14,
              color: [[1, palette.track]],
            },
          },
          pointer: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          anchor: { show: false },
          title: { show: false },
          detail: {
            valueAnimation: true,
            fontSize: 28,
            fontWeight: 800,
            fontFamily: 'Raleway, Gotham, sans-serif',
            color: palette.title,
            offsetCenter: [0, '8%'],
            formatter: '{value}',
          },
          data: [{ value: 74 }],
        },
      ],
    };
  }

  // bars — columnas modernas con radio y degradado
  return {
    color: [a],
    grid: { left: 8, right: 8, top: 16, bottom: 8, containLabel: true },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
      ...axisCommon(palette),
    },
    yAxis: { type: 'value', ...axisCommon(palette) },
    series: [
      {
        type: 'bar',
        barWidth: '48%',
        itemStyle: {
          borderRadius: [10, 10, 4, 4],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: a },
              { offset: 1, color: palette.mid },
            ],
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 12,
            shadowColor: 'rgba(24, 21, 17, 0.18)',
          },
        },
        data: [420, 532, 401, 634, 490, 580, 520],
      },
    ],
  };
}
