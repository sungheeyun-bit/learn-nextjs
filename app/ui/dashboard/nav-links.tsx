"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}






/**
 * @param {number[]} nums
 * @return {number[]}
 */

function heapify(nums, n, i) {
  // 이진 트리의 노드를 배열에 저장하는 경우, 각 노드의 위치는 인덱스를 사용하여 계산 
  let largest = i; // 부모 인덱스
  let left = 2 * i + 1; // 왼쪽 자식 노드 인덱스
  let right = 2 * i + 2; // 오른쪽 자식 노드 인덱스

  // 왼쪽 자식 노드가 부모 노드보다 크다면
  if (left < n && nums[left] > nums[largest]) {
    largest = left;
  }

  // 오른쪽 자식 노드가 현재 가장 큰 노드보다 크다면
  if (right < n && nums[right] > nums[largest]) {
    largest = right;
  }

  // 가장 큰 노드가 부모 노드가 아니라면 교체 후 재귀적으로 heapify
  if (largest !== i) {
    [nums[i], nums[largest]] = [nums[largest], nums[i]]; // swap
    heapify(nums, n, largest);
  }
}

var sortArray = function (nums) {
  let n = nums.length;

  // 최대 힙을 구축
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }

  // 요소를 하나씩 추출하여 정렬
  // 최대 힙이 구축된 후에는 배열의 루트(최대값)를 배열의 끝과 교체하고,
  // 힙의 크기를 줄여가며 정렬을 수행한다. 
  for (let i = n - 1; i > 0; i--) {
    [nums[0],nums[i]] = [nums[i], nums[0]];
    heapify(nums, i, 0);
  }

  return nums;
};